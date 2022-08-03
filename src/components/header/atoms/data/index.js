import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

export const iconsForHeader = [
  { icon: HotelIcon, name: 'Stays', active: true },
  { icon: FlightIcon, name: 'Flights', active: false },
  { icon: DirectionsCarIcon, name: 'Car rentals', active: false },
  { icon: AttractionsIcon, name: 'Attractions', active: false },
  { icon: LocalTaxiIcon, name: 'Airport taxo', active: false },
];
