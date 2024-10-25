import './all.css'
import Players from './Players';
import PropType from 'prop-types'
import Selected from './Selected';

const Toggle = ({ handleIsActive, isActive, coin, handleCoinDecrease, selectedCount, players, addNewPlayer }) => {
    return (
        <div>
            <div className='container mx-auto px-4'>
                <div className="flex justify-between items-center">
                    <h3 className='font-bold text-black text-2xl' >{isActive?.cart ? "Available Players" : `Selected Player (${selectedCount}/6)`}</h3>
                    <div className="border rounded-xl">
                        <button onClick={() => {
                            handleIsActive('Available')
                        }} className={`${isActive?.cart ? "btn bg-transparent active" : "btn bg-transparent"}`}>Available</button>
                        <button onClick={() => {
                            handleIsActive('Selected')
                        }} className={`${isActive?.cart ? "btn bg-transparent" : "btn bg-transparent active"}`}>Selected
                            ({selectedCount})
                        </button>
                    </div>
                </div>
            </div>

            {isActive?.cart ?
                <Players
                    players={players}
                    handleCoinDecrease={handleCoinDecrease}
                    coin={coin}
                ></Players> : (addNewPlayer.map(NewPlayer =>
                    <Selected
                        key={NewPlayer.id}
                        NewPlayer={NewPlayer}
                    >
                    </Selected>
                ))}

        </div>
    );
};

Toggle.propTypes = {
    handleIsActive: PropType.func,
    isActive: PropType.object,
}

export default Toggle;