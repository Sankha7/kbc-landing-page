import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const DeleteAccount = () => {
  return (
    <>
      <Helmet>
        <title>Delete Account | Kolkata Business Club</title>
        <meta
          name="description"
          content="Steps and instructions on how to request deletion of your Kolkata Business Club account and personal data."
        />
        <link rel="canonical" href="https://kolkatabusinessclub.com/delete-account" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="premium-card max-w-3xl w-full p-8 md:p-12">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-semibold text-accent hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Delete Your Kolkata Business Club Account
          </h1>
          <p className="text-muted-foreground mb-8 text-base">
            We are sorry to see you go. If you decide to delete your account,
            please read the important details below regarding your data and membership.
          </p>

          {/* Warning Box */}
          <div className="bg-destructive/10 border-l-4 border-destructive text-destructive p-5 rounded-xl mb-8">
            <p className="font-semibold text-base mb-1">
              ⚠ Deleting your account is permanent.
            </p>
            <p className="text-sm">
              This action <strong>cannot be undone</strong> and will permanently remove:
            </p>
            <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
              <li>Your member profile, digital member card, and directory listing</li>
              <li>Your posted job, gig, and project listings</li>
              <li>Your timeline posts, comments, and chat messages</li>
              <li>Your preferences and saved personalization data</li>
            </ul>
          </div>

          {/* Steps */}
          <h2 className="font-serif text-xl font-bold text-foreground mb-6">
            How to Request Account Deletion
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center bg-primary text-primary-foreground w-8 h-8 rounded-full text-sm font-semibold shrink-0">
                1
              </span>
              <p className="pt-1">
                Open Kolkata Business Club and go to <strong>Settings</strong>, then tap{" "}
                <strong>Contact Support Desk</strong> — or email us directly (below).
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center bg-primary text-primary-foreground w-8 h-8 rounded-full text-sm font-semibold shrink-0">
                2
              </span>
              <p className="pt-1">
                Request account deletion, including the email address your account is
                registered under.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center bg-primary text-primary-foreground w-8 h-8 rounded-full text-sm font-semibold shrink-0">
                3
              </span>
              <p className="pt-1">
                Our team verifies the request and permanently deletes your account and
                associated data.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Need assistance? Email us at{" "}
              <a
                href="mailto:info@kolkatabusinessclub.com"
                className="text-primary underline"
              >
                info@kolkatabusinessclub.com
              </a>
            </p>
            <Link
              to="/"
              className="px-6 py-2.5 rounded-xl bg-secondary text-foreground text-sm font-semibold hover:bg-secondary/80 transition-colors"
            >
              Return to Website
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;