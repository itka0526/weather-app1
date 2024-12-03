export async function GET() {
    const weatherResp = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&forecast_days=1"
    );
    const jsonResp = await weatherResp.json();
    return Response.json(jsonResp);
}
