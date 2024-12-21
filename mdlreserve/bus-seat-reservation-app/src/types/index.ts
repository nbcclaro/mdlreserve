export interface SeatLayout {
    seatNumber: string;
    isAvailable: boolean;
}

export interface Reservation {
    travelDate: string;
    travelTime: '2am' | '7pm' | '9pm';
    selectedSeats: SeatLayout[];
}