import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function toEmbedUrl(url: string): string {
  let m = url.match(/youtu\.be\/([^?&]+)/);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  m = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  m = url.match(/youtube\.com\/shorts\/([^?&]+)/);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  return url;
}
import { ArrowLeft, ExternalLink, Github, Figma } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { projects } from '@/data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpenViewer = (image: string, index: number) => {
    setActiveImage(image);
    setActiveIndex(index);
    setViewerOpen(true);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Back Button */}
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <Button asChild variant="ghost" size="sm">
            <Link to="/projects" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Hero */}
        <section className="container-custom px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {(Array.isArray(project.category) ? project.category : [project.category]).map(cat => (
                <Badge key={cat} variant="secondary" className="bg-primary/10 text-primary border-0">
                  {cat}
                </Badge>
              ))}
              <span className="text-muted-foreground">{project.year}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-in">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '100ms' }}>
              {project.description}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {project.liveUrl && (
                <Button asChild variant="hero">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.figmaUrl && (
                <Button asChild variant="outline">
                  <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                    <Figma className="w-4 h-4" />
                    Figma
                  </a>
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Video Demo */}
        {(project.videoUrl || project.mobileVideoUrl) && (
          <section className="container-custom px-4 sm:px-6 lg:px-8 pb-16">
            <div className={`grid gap-6 ${project.videoUrl && project.mobileVideoUrl ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {project.videoUrl && (
                <div className={`rounded-2xl overflow-hidden border border-border/50 animate-fade-in-up ${project.mobileVideoUrl ? 'lg:col-span-2' : ''}`}>
                  {project.mobileVideoUrl && (
                    <p className="px-4 pt-4 pb-2 text-sm font-medium text-muted-foreground">Desktop View</p>
                  )}
                  <iframe
                    src={toEmbedUrl(project.videoUrl)}
                    title={`${project.title} Desktop Demo`}
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              {project.mobileVideoUrl && (
                <div className="rounded-2xl overflow-hidden border border-border/50 animate-fade-in-up">
                  <p className="px-4 pt-4 pb-2 text-sm font-medium text-muted-foreground">Mobile View</p>
                  <iframe
                    src={toEmbedUrl(project.mobileVideoUrl)}
                    title={`${project.title} Mobile Demo`}
                    className="w-full aspect-[9/16]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Project Images — grouped */}
        {project.imageGroups && project.imageGroups.length > 0 && (
          <section className="container-custom px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
            <h2 className="text-2xl font-semibold">Gallery</h2>
            {project.imageGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-lg font-medium text-muted-foreground mb-4">{group.label}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.images.map((image, index) => (
                    <button
                      key={`${project.id}-${group.label}-${index}`}
                      type="button"
                      onClick={() => handleOpenViewer(image, index)}
                      className="group rounded-2xl overflow-hidden border border-border/50 bg-muted text-left transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${group.label} ${index + 1}`}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Project Images — flat */}
        {!project.imageGroups && project.images && project.images.length > 0 && (
          <section className="container-custom px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <button
                  key={`${project.id}-image-${index}`}
                  type="button"
                  onClick={() => handleOpenViewer(image, index)}
                  className="group rounded-2xl overflow-hidden border border-border/50 bg-muted text-left transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        <Dialog open={viewerOpen} onOpenChange={setViewerOpen}>
          <DialogContent className="max-w-6xl border-0 bg-black/90 p-4 text-white shadow-none">
            {activeImage && (
              <div className="flex h-[80vh] w-full items-center justify-center">
                <img
                  src={activeImage}
                  alt={`${project.title} gallery image ${activeIndex + 1}`}
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Technologies */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-muted text-foreground font-medium text-sm opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Like What You See?
            </h2>
            <p className="text-background/70 text-lg max-w-xl mx-auto mb-8">
              Let's discuss how we can create something amazing for your business.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
