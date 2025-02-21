"use client";

export function LogoAnimation() {
	return (
		<div className="w-48 h-48 mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center relative overflow-hidden shadow-lg">
			<div className="absolute sm:static inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 animate-spin-slow" />
			<div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10" />
				<div className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-purple-500/30 to-transparent" />
				<div className="absolute sm:relative inset-0 flex items-center justify-center">
					<div className="w-3/4 h-3/4 rounded-full border-2 border-cyan-500/30 flex items-center justify-center animate-pulse">
						<div className="w-1/2 h-1/2 rounded-full border-2 border-purple-500/30 flex items-center justify-center animate-pulse">
							<div className="w-1/4 h-1/4 rounded-full bg-blue-500/30 animate-pulse" />
						</div>
					</div>
				</div>
				<span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 relative z-10 drop-shadow-lg">
					BRIDGER
				</span>
			</div>
		</div>
	);
}
