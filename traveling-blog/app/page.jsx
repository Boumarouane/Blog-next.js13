import Image from 'next/image'


export default function Home() {

  return (
    <main>
      <Image
        src="/img/forest.jpeg"
        width={2000}
        height={500}
        alt="Picture of the author"
        priority
      />
         <Image
        src="/img/bg1.jpeg"
        width={2000}
        height={500}
        alt="Picture of the author"    
      />
         <Image
        src="/bg2.jpeg"
        width={2000}
        height={500}
        alt="Picture of the author"
      />
    </main>
  );
}
