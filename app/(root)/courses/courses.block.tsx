const CoursesBlock = () => {
	return (
		<>
			<div className='container mx-auto grid min-h-[80vh] max-w-6xl grid-cols-1 gap-8 max-md:grid-cols-1 max-md:pt-32'>
				<div className='flex flex-col space-y-4 self-center'>
					<h1 className='font-space-grotesk text-5xl font-bold '>
						Malumotlar keriting
					</h1>
					<p className='max-w-screen-md text-muted-foreground'>
					Beautiful Soup is a Python library for pulling data out of HTML and XML files. It works with your favorite parser to provide idiomatic ways of navigating, searching, and modifying the parse tree. It commonly saves programmers hours or days of work.
					</p>
					<div className='flex gap-4'></div>
				</div>
			</div>
		</>
	)
}

export default CoursesBlock
