const confirmDelete = (reviewId) => {
  if (confirm('Are you sure you want to delete this review?')) {
    window.location = `/delete/${reviewId}`
  }
}
