const CarouselDots = ({ total, current }: { total: number; current: number }) => {
 return (
    <div className="flex justify-center gap-1 mt-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full transition-all ${
            i === current ? "bg-pink-500 w-4" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default CarouselDots
