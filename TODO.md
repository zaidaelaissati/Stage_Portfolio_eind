# TODO - Fix Weekoverzichten Category Filtering

## Task Summary
The category filtering for weekoverzichten (weekly overviews) in index.html is not working because there's no JavaScript filter logic for blog posts.

## Completed Tasks

### ✅ Step 1: Update index.html filter buttons
- Changed filter buttons to the requested categories:
  - Alle Posts (all)
  - Opstart (startup)
  - Database
  - Backup
  - Meetings
  - Teambuilding
  - Linux
  - Documentatie

### ✅ Step 2: Update blog post data-tags
- Updated existing blog posts to use the new category tags:
  - Week 2 post: opstart,database,meetings,documentatie
  - Week 1 post: opstart,database,backup,meetings,linux
  - Teambuilding post: teambuilding
- Updated visible tags in blog posts to match

### ✅ Step 3: Update main.js
- Added filter functionality for blog posts
- Filter uses data-tags attribute to filter posts when clicking filter buttons

### ✅ Step 4: Verify CSS styling
- Confirmed existing CSS styling for filter buttons and active state

## Files Edited:
1. index.html - Updated filter buttons and blog post tags
2. js/main.js - Added blog post filter functionality
