import { RotatingCarousel } from "@/components/rotating-carousel"
import { carouselItems } from "@/data/carousel-items"

export default function DashboardPage() {
  return (
    <RotatingCarousel
      items={carouselItems}
      width={190}
      height={254}
      sensitivity={0.3}
    />
  )
}
