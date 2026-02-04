const deleteComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full p-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Delete Your Kolkata Business Club Account
        </h1>
        <p className="text-gray-600 mb-6">
          We're sorry to see you go. If you decide to delete your account, please
          read the important details below.
        </p>
        {/* Warning Box */}
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-5 rounded-lg mb-8">
          <p className="font-semibold text-lg mb-1">
            ⚠ Deleting your account is permanent.
          </p>
          <p className="mb-2">
            This action <strong>cannot be undone</strong> and will remove:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
            <li>Your post images</li>
            <li>Your reading plans</li>
            <li>Your preferences and personalization data</li>
          </ul>
        </div>
        {/* Steps */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Steps to Delete Your Account
        </h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center bg-blue-500 text-white w-8 h-8 rounded-full text-sm font-semibold">
              1
            </span>
            <p>
              Select the <strong>Profile</strong> tab.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center bg-blue-500 text-white w-8 h-8 rounded-full text-sm font-semibold">
              2
            </span>
            <p>
              Tap <strong>Settings</strong> (gear icon).
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center bg-blue-500 text-white w-8 h-8 rounded-full text-sm font-semibold">
              3
            </span>
            <p>
              Select a reason for <strong>deleting the account</strong>.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center bg-blue-500 text-white w-8 h-8 rounded-full text-sm font-semibold">
              4
            </span>
            <p>
              Scroll to the bottom and tap <strong>Delete Account</strong>.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center bg-blue-500 text-white w-8 h-8 rounded-full text-sm font-semibold">
              5
            </span>
            <p>
              Select <strong>Yes</strong> to confirm deletion.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default deleteComponent;