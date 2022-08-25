import { SkeletonCard } from "../../Components";

export const SkeletonCards = () => {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((it) => (
        <SkeletonCard key={it} />
      ))}
    </>
  );
};
