import Image from "next/image";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-auto md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  renderContent,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  renderContent?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group shadow-input flex flex-col gap-3 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black",
        className
      )}
    >
      {renderContent ? (
        renderContent
      ) : img ? (
        <Image
          src={img}
          alt={title ? title.toString() : "image"}
          width={400}
          height={300}
          className={cn(
            "rounded-xl object-contain w-full h-auto",
            imgClassName
          )}
        />
      ) : null}

      <div>
        <div className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-300 break-words">
          {description}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;