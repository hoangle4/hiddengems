export const calculateDistance = (pointA, pointB) => {
	const latA = pointA.coordinate.latitude;
	const lngA = pointA.coordinate.longitude;

	const latB = pointB.coordinate.latitude;
	const lngB = pointB.coordinate.longitude;

	const R = 6371e3; // earth radius in meters
	const φ1 = latA * (Math.PI / 180);
	const φ2 = latB * (Math.PI / 180);
	const Δφ = (latB - latA) * (Math.PI / 180);
	const Δλ = (lngB - lngA) * (Math.PI / 180);

	const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * (Math.sin(Δλ / 2) * Math.sin(Δλ / 2));

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	const distance = R * c;
	return distance;
};
