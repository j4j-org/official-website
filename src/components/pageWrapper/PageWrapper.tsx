import { HeaderWelcomeBG } from '@/components/svgBgs';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="z-0 m-auto flex max-w-[1200px] flex-col justify-evenly gap-20 xs:p-6">
      <HeaderWelcomeBG className="absolute left-0 top-0 -z-10 h-[1000px] w-full" />
      {children}
    </div>
  );
};
