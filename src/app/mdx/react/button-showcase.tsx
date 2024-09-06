"use client"

const Button = () => {
    return (
        <button 
            type="button" 
            className="px-8 py-3 bg-primary hover:bg-primary/80 rounded-full font-semibold text-primary-foreground transition-all"
            onClick={() => {
                const meow = "Мяу!"
                alert(meow)
            }}
        >
            Мяукнуть
        </button>
    )
}

export { Button }