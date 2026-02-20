export const feedback = [
    {
        id:1,
        message: "The Food was great"
    },
    {
        id:2,
        message: "Best food i've ever had"
    }
]

export async function GET(request) {

    return Response.json({
        status: 200,
        message: "Hi, API created"
    })
}