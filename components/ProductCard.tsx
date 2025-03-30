interface ProductCardProps {
  title: string;
  children: React.ReactNode;
}

export default function ProductCard({ title, children }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center text-center w-full sm:w-1/3 p-4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full h-full">{children}</div>
    </div>
  );
}
