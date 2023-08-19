import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const Navbar = () => {
    return (
        <header className="absolute z-10 w-full">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center ">
                    <Image
                        src="/logo.svg"
                        alt="Car Hub Logo"
                    />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar