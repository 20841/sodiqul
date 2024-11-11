'use client'

import LanguageDropdown from '@/components/shared/language-dropdown'
import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { DrawerClose } from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import {  AlignLeft } from 'lucide-react'
import Link from 'next/link'


function Mobile() {
	return (
	
		<Sheet>
		
			<SheetTrigger asChild className='md:hidden'>
				<Button size={'icon'} variant={'ghost'}>
					<AlignLeft />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<SheetHeader>
					<Logo />						
					<Separator />
				</SheetHeader>
				
				<div className='mt-4 flex flex-col space-y-3'>
				
						{navLinks.map(nav => (
						<Link
							href={`/${nav.route}`}
							key={nav.route}
							className='flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20'
						>
							<nav.icon className='size-5' />
							<DrawerClose>
							<span>{nav.name}</span>	
							</DrawerClose>
						</Link>
					))}
				
					<div className='flex items-center bg-secondary font-space-grotesk'>
						<LanguageDropdown />
						<span>Languache</span>
					</div>
				</div>
				
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
