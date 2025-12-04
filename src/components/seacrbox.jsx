

export default function SearchBox({ value, onChange, placeholder = "Search your mind here", showClearButton = false, onClear }){
    return(
        <div className="relative w-full max-w-[700px]">
            <input 
                type="text" 
                placeholder={placeholder} 
                value={value || ""}
                onChange={onChange}
                className="p-3 w-full bg-secondary placeholder-slate-500 rounded-lg hover:border-border duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30" 
            />
            {showClearButton && value && (
                <button
                    onClick={onClear}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 font-bold text-xl"
                    title="Clear search"
                >
                    ✕
                </button>
            )}
        </div>
    )
}