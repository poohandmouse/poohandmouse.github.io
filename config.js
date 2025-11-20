/**
 * CRITICAL: This file defines the global variables necessary for Firebase authentication and configuration.
 * When running in a production or platform environment, these variables are often dynamically injected.
 * * For local testing, we provide safe, empty defaults to prevent "undefined" errors 
 * and allow the main application's error handling to take over gracefully.
 */

// Application ID (used for Firestore pathing)
window.__app_id = 'default-app-id'; 

// Firebase SDK Configuration object (JSON string)
window.__firebase_config = '{}'; 

// Initial custom authentication token
window.__initial_auth_token = null;

// The main script (index.html) will detect this empty config and disable persistence, 
// running the assessment in local mode without error.
