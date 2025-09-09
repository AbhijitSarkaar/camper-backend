// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public

exports.getBootcamps = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'get all bootcamps',
  });
};

// @desc Create new bootcamp
// @route POST /api/v1/bootcamps
// @access Private

exports.createBootcamp = async (req, res, next) => {
  res.status(201).json({
    success: true,
    message: 'bootcamp created',
  });
};

// @desc Get a single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'get a bootcamp',
  });
};

// @desc Update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'bootcamp updated',
  });
};

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'bootcamp deleted',
  });
};
