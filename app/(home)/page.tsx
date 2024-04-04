import Dropzone from '@/components/custom-ui/dropzone';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
      <div className="md:space-y-16 space-y-8 md:pb-16 pb-8">
        {/* Title + Desc */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-medium text-center">
            Free Unlimited File Converter
          </h1>
          <p className="text-subtle text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
            Unleash your creativity with DocSwap - the ultimate online tool for
            unlimited and free multimedia conversion. Transform images, audio,
            and videos effortlessly, without restrictions. Start converting now
            and elevate your content like never before!
          </p>
        </div>

        {/* Upload Box */}
        <Dropzone />
      </div>
    </main>
  );
}
