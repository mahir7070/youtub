class ApiError extends Error {
    constructor(
      statusCode,
      message = "Something went wrong",
      error = [],
      stack = ""
    ) {
      super(message); // Call the parent class constructor with the message
      this.statusCode = statusCode;
      this.error = error;
      this.data = null;
      this.success = false;
      this.errors = error; // Assuming you want to set this.errors to the error parameter
  
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  