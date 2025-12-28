import "dotenv/config"; 
import express, { Request, Response } from "express"; 
import path from "path"; 
 
const app = express(); 
const port = 3000; 
 
app.use(express.static(path.join(__dirname, "../public"))); 
 
type WeatherResp = { 
  coord: { lon: number; lat: number }; 
  main: { temp: number }; 
  weather: { description: string; icon: string }[]; 
}; 
 
type PollutionResp = { 
  list: { main: { aqi: number }; components: { pm2_5: number; pm10: number } 
}[]; 
}; 
app.get("/api/weather", async (req: Request, res: Response) => { 
  const city = (req.query.city as string) || "London"; 
  const appKey = process.env.OPENWEATHER_KEY; 
 
  if (!appKey) return res.status(500).json({ message: "Missing OPENWEATHER_KEY" }); 
  try { 
// 1. Call Weather endpoint to get temp, description, icon, and lat/lon 

// 2. Extract values from weather response 

// 3. Call Air pollution endpoint using lat and lon 

// 4. Extract air quality values 

// 5. Return JSON in the required format 
 
  } catch (err) { 
    console.error(err); 
    res.status(500).json({ message: "Error fetching weather data" }); 
  } 
}); 
 
app.listen(port, () => console.log(`http://localhost:${port}`));