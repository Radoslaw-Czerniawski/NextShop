import uniqid from 'uniqid';
import Link from 'next/link';
import { useRouter } from 'next/router';

const paths = [
    {
        text: 'Main',
        path: '/',
    },
    {
        text: 'About',
        path: '/about',
    },
    {
        text: 'Products',
        path: '/products',
    },
];

export const Header = () => {
    const router = useRouter();

    return (
        <header className='flex bg-gray-500 justify-center w-full'>
            <nav className='flex text-4xl gap-4'>
                {paths.map(({ text, path }) => (
                    <Link key={text} href={path}>
                        <a
                            className={
                                router.pathname === path ? 'font-bold' : ''
                            }
                        >
                            {text}
                        </a>
                    </Link>
                ))}
            </nav>
        </header>
    );
};
