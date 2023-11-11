const UserSchema = require("../models/UserSchema");
const AppointmentRequestSchema = require("../models/AppointmentRequestSchema");

async function addToFavorite(req, res) {
  const { property_id, property_name, property_image } = req.body;

  const userId = req.user.user_id; // Assuming you have the user_id in the decoded JWT payload

  try {
    // Check if the user has already added this property to their favorites
    const user = await UserSchema.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const existingFavorite = user.favorite_properties.find(
      (favorite) =>
        favorite.property_id === property_id &&
        favorite.property_name === property_name &&
        favorite.property_image === property_image
    );

    if (existingFavorite) {
      return res.status(400).json({ error: "Property already in favorites" });
    }

    // Add the new favorite property to the user's favorites
    user.favorite_properties.push({
      property_id,
      property_name,
      property_image,
    });

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: "Property added to favorites" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add property to favorites" });
  }
}

async function deleteFavorite(req, res) {
  const userId = req.params.id;
  const propertyIndex = parseInt(req.params.propertyIndex);

  try {
    const property = await UserSchema.findById(userId);

    if (!property) {
      return res.status(404).send("Property not found");
    }

    // Check if the imageIndex is within a valid range
    if (
      propertyIndex < 0 ||
      propertyIndex >= property.favorite_properties.length
    ) {
      return res.status(400).send("Invalid image index");
    }

    // const adjustedIndex = imageIndex - 1;

    const deletedImage = property.favorite_properties[propertyIndex];

    // Splice the image from the images array using the imageIndex
    property.favorite_properties.splice(propertyIndex, 1);

    await property.save(); // Save the updated property document

    res
      .status(200)
      .json({ message: "Image deleted successfully", deletedImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error deleting image from property",
      message: error.message,
    });
  }
}

// async function myFavorites(req, res) {
//   const { user_id } = req.params;

//   try {
//     // Find the user by _id
//     const user = await UserSchema.findById(user_id);

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Extract the property_ids from the user's favorite_properties
//     const propertyIds = user.favorite_properties.map(
//       (favorite) => favorite.property_id
//     );

//     // Find the properties based on the property_ids
//     const favoritePropertyDetails = await PropertySchema.find({
//       _id: { $in: propertyIds },
//     });

//     res.status(200).json(favoritePropertyDetails);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }

async function myFavorites(req, res) {
  const { user_id } = req.params;

  try {
    // Find the user by _id
    const user = await UserSchema.findById(user_id);
    // console.log(user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Retrieve the favorite_properties directly
    const favoriteProperties = user.favorite_properties;

    res.status(200).json(favoriteProperties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function sendAppointmentRequest(req, res) {
  const { user_id, property_id, seller_id } = req.body;

  // Create a new appointment request
  const appointmentRequest = new AppointmentRequestSchema({
    user_id,
    property_id,
    seller_id,
    date_of_request: new Date(),
  });

  try {
    await appointmentRequest.save();
    res.status(200).json({ message: "Appointment request sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addToFavorite,
  deleteFavorite,
  myFavorites,
  sendAppointmentRequest,
};