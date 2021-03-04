const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the product name'],
    trim: true,
    maxLength: [100, 'Dont exced 100 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter the product price'],
    maxLength: [5, 'Enter 5 numbers'],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, 'Please enter the product description'],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Select the category'],
    enum: {
      values: [
        'General Electronics',
        'Home Electronics',
        'Computer',
        'Laptops',
        'Phones',
        'Headphones',
        'Accessories',
        'Tablets',
        'Cameras',
        'Others',
      ],
      message: ' Please select the category for Electronic items',
    },
  },
  seller: {
    type: String,
    required: [true, 'Please enter product seller'],
  },
  stock: {
    type: Number,
    required: [true, 'Please enter product stock'],
    maxLength: [6, 'Dont exced over 6'],
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.export = mongoose.model('Product', productSchema);
