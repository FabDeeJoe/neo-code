import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/neo-code-logo.png"
        alt="Neo Code Logo"
        width={200}
        height={50}
        className="h-12 w-auto"
        priority
      />
    </Link>
  );
} 