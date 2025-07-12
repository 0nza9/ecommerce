const Page = () => {
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Mes contacts</h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
                <img 
                    src="/cf5e04b3cd7fabef7a3167b99250e017.jpg" 
                    alt="Image 1" 
                    style={{
                        maxWidth: "300px",
                        height: "auto",
                        border: "3px solid lightblue",
                        borderRadius: "10px",
                        padding: "4px"
                    }}
                />
                <img 
                    src="/cf5e04b3cd7fabef7a3167b99250e017.jpg" 
                    alt="Image 2" 
                    style={{
                        maxWidth: "300px",
                        height: "auto",
                        border: "3px solid violet",
                        borderRadius: "10px",
                        padding: "4px"
                    }}
                />
            </div>
        </div>
    );
};

export default Page;
