import UBCLogoWhite from './assets/ubc-logo-2018-crest-white-rgb72.png';

export default function Header() {
    return (
        <div>
            <header className="text-3xl bg-color-1 text-white flex p-4">
                <div>
                    <img className='h-10' alt='ubc logo' src={UBCLogoWhite} />
                </div>
                <div className='bg-white w-1 mx-4'>

                </div>
                <div className='my-auto'>
                    UBC MC
                </div>
            </header>
        </div>
    )
}