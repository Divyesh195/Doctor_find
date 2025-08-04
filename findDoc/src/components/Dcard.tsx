import { MapPin, Star, Phone, Calendar } from "lucide-react";

interface DoctorCardProps {
  name: string;
  image: string;
  specialty: string;
  experience: string;
  location: string;
  fee: string;
  rating: number;
  reviews: number;
  availability: string;
  clinicName?: string;
  additionalClinics?: number;
}

const DoctorCard = ({
  name,
  image,
  specialty,
  experience,
  location,
  fee,
  rating,
  reviews,
  availability,
  clinicName,
  additionalClinics,
}: DoctorCardProps) => {
  return (
    <div className="transition-all duration-300 md:border-t border-gray-400 bg-gray-100 hover:bg-blue-100 w-full">
      <div className="flex md:flex-row flex-col items-baseline md:items-start gap-4  border border-gray-400 md:border-0 rounded-sm p-5 md:p-10 cursor-pointer">
        {/* Doctor Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl  font-semibold text-primary hover:underline cursor-pointer">
                {name}
              </h3>
              <p className="text-md  font-semibold text-gray-600">{specialty}</p>
              <p className="text-sm text-gray-600">{experience} Year of experience</p>
            </div>
          </div>

          {/* Location & Clinic */}
          <div className="flex items-center flex-wrap gap-1 mb-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm font-medium">{location}</p>
            {clinicName && (
              <div className="flex flex-wrap">
                <p className="text-sm text-muted-foreground"> • </p>
                <p className="text-sm text-muted-foreground ml-1">
                  {clinicName}
                </p>
              </div>
            )}
          </div>

          {/* Fee */}
          <p className="text-sm mb-3">
            <span className="font-semibold">₹{fee}</span> Consultation fee at
            clinic
          </p>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-2 mb-4">
            <p className="bg-green-500 text-white p-1 rounded-md flex items-center gap-1">
              <Star className="h-3 w-3 fill-current" />
              {rating}%
            </p>
            <span className="font-bold text-gray-800 underline cursor-pointer">
              {reviews} Patient Stories
            </span>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-auto">
          {/* Availability */}
          {availability && (
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Calendar />
              <span className="text-sm  font-medium">{availability}</span>
            </div>
          )}
          <button className="bg-primary text-white border h-11 w-48 px-2 rounded-md font-semibold border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer hover:text-white">
            Book Clinic Visit
            {!clinicName && <div className="text-xs">No Booking Fee</div>}
          </button>
          <button className="flex items-center justify-center text-primary border h-11 w-48 px-2 rounded-md font-semibold border-primary bg-white hover:bg-primary hover:text-primary-foreground cursor-pointer hover:text-white">
            <Phone className="h-4 w-4 mr-2" />
            <p>Contact Clinic</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
