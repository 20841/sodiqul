'use client'

import Logo from '@/components/shared/logo'
import ModeToggle from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import LanguageDropdown from '@/components/shared/language-dropdown'

import Mobile from './mobile'

function Navbar() {

	return (
		<div className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>
			<div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b'>
				<div className='flex items-center gap-4'>
					<Logo />
					<div className='hidden items-center gap-3 border-l pl-2 md:flex'>
						{navLinks.map(nav => (
							<Link
								href={`/${nav.route}`}
								key={nav.route}
								className='font-medium transition-all hover:text-blue-500 hover:underline'
							>
								{nav.name}
							</Link>
						))}
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<div className='flex items-center gap-2 md:border-r md:pr-3'>
						<div className='hidden md:flex'>
							<LanguageDropdown />
						</div>
						<Mobile />
						<ModeToggle />
					</div>
							<Button
								variant={'ghost'}
								size={'lg'}
								rounded={'full'}
								className='hidden md:flex'
							>
								{'logIn'}
							</Button>
							<Button size={'lg'} rounded={'full'} className='hidden md:flex'>
								{'signUp'}
							</Button>
							<Button size={'icon'} variant={'ghost'} className='md:hidden'>
								<LogIn />
							</Button>
				
				</div>
			</div>
		</div>
	)
}

export default Navbar
