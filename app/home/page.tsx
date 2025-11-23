import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Your Home Page! 🏠
          </h1>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Hello, {user.firstName || user.username || 'User'}!
              </h2>
              
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900 dark:text-white">Email:</span>
                  <span>{user.emailAddresses[0]?.emailAddress}</span>
                </div>
                
                {user.firstName && (
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900 dark:text-white">First Name:</span>
                    <span>{user.firstName}</span>
                  </div>
                )}
                
                {user.lastName && (
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900 dark:text-white">Last Name:</span>
                    <span>{user.lastName}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900 dark:text-white">User ID:</span>
                  <span className="font-mono text-sm">{user.id}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Protected Content
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This page is only accessible to authenticated users. You're seeing this because you're logged in!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

