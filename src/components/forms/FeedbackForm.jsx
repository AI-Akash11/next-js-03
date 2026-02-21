"use client"
const FeedbackForm = () => {
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const message = e.target.message.value;

        const res = await fetch("http://localhost:3000/api/feedback/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({message})
        })
        const data = await res.json()

        if(data.insertedId){
            alert("Data inserted successfully")
        }

        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5 text-center">
            <textarea className="w-xl border border-dashed p-3" required name="message" cols="30" rows="10"></textarea>
            <br />
            <button className="btn">Add Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;