
const ReadTime = ({spendTime}) => {    
    return (
        <div className="p-5 bg-sky-600 rounded-md mb-5">
            <h2 className="text-white font-semibold tracking-wider">Spent time on read: {spendTime}min</h2>
        </div>
    );
};

export default ReadTime;