import BeeLogo from './images/logo.png';

export default function Header() {
    return (
        <div>
            <header className="text-6xl bg-mc-icon text-white text-center p-6">
                <div className="flex w-full font-bungee ">

                    <div className='flex w-full justify-center'>
                        <span className='my-auto'>UBC Minecraft</span>
                        <img className='h-24 justify-center ml-2' src={BeeLogo} alt="ubc bee logo" />
                    </div>

                </div>
            </header>
        </div>
    )
}