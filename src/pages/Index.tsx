import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Trophy, Award, Medal, Check } from 'lucide-react';
import moselHeroLogo from '@/assets/images/mosel-hero-logo.png';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { featuredProjects } from '@/data/projects';

const achievements = [
{
  icon: Trophy,
  title: 'Best Teamwork Award',
  event: 'National Fintech Codeathon 2022'
},
{
  icon: Medal,
  title: '3rd Prize Winner',
  event: 'Innovate Carlo Rino UPM UI/UX 2024'
},
{
  icon: Award,
  title: '1st Prize Winner',
  event: 'Digital Kampung Website for Community'
}];



export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in mb-[25px]">
              <Laptop className="w-4 h-4" />
              Web Development Studio
            </div>

            {/* Heading */}
            <div className="mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <img src={moselHeroLogo} alt="Mosel" className="h-16 md:h-20 lg:h-24 mx-auto" />
            </div>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Landing pages for more sales
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '300ms' }}>
              We build landing pages that help you get more leads.
              Clear messaging, conversion-driven UX, and fast performance that guide visitors to take action.
              Let's get more sales!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/projects">
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </section>


      {/* Featured Projects Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            label="Our Work"
            title="Projects Delivered"
            description="Explore our previous works delivered." />


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) =>
            <ProjectCard key={project.id} project={project} index={index} />
            )}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Pricing"
            title="Our Website Packages"
            description="Choose the perfect package for your business needs." />


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
            {
              name: 'Starter',
              price: 'RM799',
              prefix: 'Starting From',
              description: 'Perfect for small businesses getting started online.',
              features: [
              '1-page responsive website',
              'Free domain 1st year',
              'Free hosting + SSL',
              'WhatsApp button + Google Maps',
              'Social media links',
              'Basic SEO',
              'Live in 5-10 days'],

              cta: 'Select Plan',
              hoverLabel: 'Simple Landing Page'
            },
            {
              name: 'Professional',
              price: 'RM1799',
              prefix: 'Starting From',
              description: 'Ideal for growing businesses that need more features.',
              features: [
              'Everything in Starter',
              'Multiple pages',
              'Photo Gallery / Video Gallery / Menu',
              'SEO Optimization',
              'Click-to-call & WhatsApp',
              '1 free revision after launch'],

              cta: 'Select Plan',
              hoverLabel: 'Professional Landing Pages'
            },
            {
              name: 'Business',
              price: 'RM4999',
              prefix: 'Starting From',
              description: 'For businesses that need advanced functionality.',
              features: [
              'Everything in Professional',
              'Blog / News section',
              'Booking or simple e-commerce',
              'Bilingual toggle (BM + English)',
              'Unlimited text edits (1st year)',
              'Priority WhatsApp support'],

              cta: 'Select Plan',
              hoverLabel: 'Full-stack Website'
            }].
            map((pkg, index) =>
            <div
              key={pkg.name}
              className="p-8 rounded-2xl bg-card flex flex-col relative opacity-0 animate-fade-in-up border border-border/50 transition-all duration-300 hover:border-primary group"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>

                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {pkg.hoverLabel}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                <div className="mb-6">
                  {pkg.prefix && <span className="text-sm text-muted-foreground">{pkg.prefix} </span>}
                  <span className="text-4xl font-bold">{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature) =>
                <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                )}
                </ul>
                <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <Link to="/contact">{pkg.cta}</Link>
                </Button>
              </div>
            )}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            *50% deposit will be charged upon order confirmation. T&C's Apply.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            label="Recognition"
            title="Our Achievements"
            description="Awards and achievements accomplished by our team members!" />


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) =>
            <div
              key={achievement.title}
              className="flex items-start gap-6 p-8 rounded-2xl bg-card border border-border/50 hover-lift opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.event}</p>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/achievements">
                View All Achievements
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto mb-10">
            Get in touch with us today and let's get more sales together!
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>);

}