import FeedbackCard from '@/components/cards/FeedbackCard';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Feedbacks"
}

export const dynamic = "force-dynamic"

const getFeedback = async () =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`,{
        // cache: "force-cache",
        next:{revalidate: 60},
    })

    return await res.json()
}

const FeedbackPage = async () => {
    const feedback = await getFeedback();

    return (
        <div>
            <div>
                <h2 className="font-bold text-2xl">{feedback.length} Feedbacks Found</h2>
                <div className='my-5'>
                    <Link className='btn' href={"/feedback/add"}>Add Feedback</Link>
                </div>
                <div className="my-3 space-y-5">
                    {
                        feedback.map(fd => <FeedbackCard feedback={fd} key={fd._id}></FeedbackCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;