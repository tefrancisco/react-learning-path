import Image from 'next/image'

export default function Header() {
  return (
    <>
      <Image
        width={100}
        height={100}
        src="/logo.png"
        alt="A server surrounded by magic sparkles."
      />
      <h1>Welcome to this NextJS course!</h1>
    </>
  );
}
