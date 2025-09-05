import { Button } from "@/components/ui/button"
import { Heart, Users } from "lucide-react"
import heroImage from "@/assets/hero-upcycling.jpg"
import reviewGreenLogo from "@/assets/review-green-logo.png"
import plantSprout from "@/assets/plant-sprout.png"
import greenHeart from "@/assets/green-heart.png"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gentle gradient */}
      <div className="absolute inset-0 bg-gradient-soft"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Hands creating beautiful upcycled treasures"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Floating icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="animate-bounce delay-0">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <div className="animate-bounce delay-150">
              <img src={reviewGreenLogo} alt="Review Green" className="w-8 h-8 object-contain" />
            </div>
            <div className="animate-bounce delay-300">
              <Users className="w-8 h-8 text-accent" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Turn Waste Into 
            <span className="bg-gradient-hero bg-clip-text text-transparent block mt-2">
              Wonders
            </span>
          </h1>

          {/* Heartfelt description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Welcome to Review Green, where every discarded item holds a story waiting to be rewritten. 
            Join our loving community of earth-guardians who see treasure where others see trash. 
            Together, we're not just reducing waste – we're creating a movement of hope, one beautiful 
            creation at a time.
          </p>

          {/* Emotional connection text */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-border shadow-lg">
            <p className="text-lg text-card-foreground italic">
              "Every bottle, every fabric scrap, every forgotten object is a chance to show our planet some love. 
              Here, creativity meets compassion, and waste becomes wonder."
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="text-lg flex items-center gap-2">
              <img src={plantSprout} alt="Plant sprout" className="w-6 h-6 object-contain" />
              Join Our Eco-Family
            </Button>
            <Button variant="nature" size="xl" className="text-lg flex items-center gap-2">
              <img src={greenHeart} alt="Green heart" className="w-6 h-6 object-contain" />
              Discover the Magic
            </Button>
          </div>

          {/* Community stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div>Loving Creators</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">1M+</div>
              <div>Items Rescued</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-earth-deep">200K+</div>
              <div>Stories Shared</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero