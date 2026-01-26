# Intersson - Setup Instructions

Complete setup guide for running the Intersson website (Next.js frontend + Django backend).

## Project Structure

```
Intersson/
├── src/                    # Next.js frontend
│   ├── app/               # Next.js pages
│   ├── components/        # React components
│   └── lib/              # API client
├── backend/               # Django backend
│   ├── api/              # Django app with models, admin, views
│   ├── intersson_backend/ # Django settings
│   ├── media/            # Uploaded files (PDFs, images)
│   └── db.sqlite3        # SQLite database
└── public/               # Static assets
```

## Prerequisites

- **Node.js** 16+ and npm
- **Python** 3.9+
- Terminal access

---

## Quick Start Guide

### Step 1: Install Backend Dependencies

Open Terminal and navigate to the backend directory:

```bash
cd ~/Intersson/backend
source venv/bin/activate
pip install -r requirements.txt
```

### Step 2: Setup Django Database

```bash
# Create database tables
python manage.py makemigrations
python manage.py migrate

# Load the 10 industries
python manage.py load_industries

# Create admin user
python manage.py createsuperuser
```

When prompted, enter:
- Username: `admin` (or your choice)
- Email: your email
- Password: create a secure password

### Step 3: Start Django Backend

```bash
python manage.py runserver
```

✅ Backend running at: **http://localhost:8000**

**Leave this terminal window open** and the backend will continue running.

---

### Step 4: Install Frontend Dependencies (New Terminal)

Open a **new terminal window** and run:

```bash
cd ~/Intersson
npm install
```

### Step 5: Start Next.js Frontend

```bash
npm run dev
```

✅ Frontend running at: **http://localhost:3000** (or 3001, 3002 if 3000 is busy)

---

## Access the Application

### Frontend (User-Facing Website)
- **URL**: http://localhost:3000
- Browse industries and templates
- View reviews
- Submit reviews (goes to admin for moderation)

### Backend Admin Panel
- **URL**: http://localhost:8000/admin
- **Login**: Use the superuser credentials you created
- Manage industries, templates, and reviews

---

## Using the Admin Panel

### 1. **Add Templates to Industries**

1. Go to http://localhost:8000/admin
2. Click on **"Templates"**
3. Click **"Add Template"** button
4. **Select Industry**: Choose from the dropdown (10 industries available)
5. **Enter Name**: Give your template a name
6. **Upload PDF**: Upload the PDF file
7. **Optional**: Upload a preview image
8. **Set Active**: Check this box to make it visible on the website
9. Click **"Save"**

The template count on the homepage will update automatically!

### 2. **Moderate Reviews**

When users submit reviews from the website:

1. Go to http://localhost:8000/admin
2. Click on **"Reviews"**
3. You'll see all submitted reviews (pending ones first)
4. To approve:
   - Select review(s) with checkboxes
   - Choose **"✓ Approve selected reviews"** from dropdown
   - Click **"Go"**
5. To reject:
   - Select review(s)
   - Choose **"✗ Reject selected reviews"**
   - Click **"Go"**

Approved reviews appear on the website immediately!

### 3. **Edit Industries**

1. Go to **"Industries"** in admin
2. You can edit:
   - Name and description
   - Icon path
   - Gradient colors
   - Display order
3. Template count updates automatically

---

## Testing the Integration

### Test 1: Add a Template
1. Open admin panel
2. Add a new template to "Business & Services"
3. Go to frontend homepage
4. Check that "Business & Services" now shows "1 template"
5. Click on "Business & Services"
6. See your template with "View Layout (PDF)" link

### Test 2: Submit and Approve a Review
1. Go to http://localhost:3000/reviews
2. Click "Leave a Review"
3. Fill out the form and submit
4. Check admin panel - review appears as "Pending"
5. Approve the review
6. Refresh the reviews page - review now appears!

---

## Common Issues

### Port 3000 Already in Use (Frontend)
```bash
# Use a different port
PORT=3001 npm run dev
```

### Port 8000 Already in Use (Backend)
```bash
# Use a different port
python manage.py runserver 8001

# Update .env.local in frontend root:
NEXT_PUBLIC_API_URL=http://localhost:8001/api
```

### "Cannot connect to API" Error
1. Make sure Django backend is running
2. Check the URL in `.env.local` file in Intersson root
3. Restart Next.js: `npm run dev`

### Virtual Environment Not Activating
```bash
# macOS/Linux
source backend/venv/bin/activate

# Windows
backend\venv\Scripts\activate
```

---

## File Upload Locations

When you upload files through the admin:
- **PDFs**: `backend/media/templates/pdfs/`
- **Preview Images**: `backend/media/templates/previews/`

These files are automatically served by Django and accessible via the API.

---

## API Endpoints

The frontend communicates with these backend endpoints:

- `GET /api/industries/` - Get all industries with template counts
- `GET /api/industries/{slug}/` - Get industry details with templates
- `GET /api/reviews/` - Get approved reviews
- `POST /api/reviews/` - Submit new review

You can test these directly:
- http://localhost:8000/api/industries/
- http://localhost:8000/api/reviews/

---

## Next Steps

1. **Add Your Templates**: Upload PDF templates for each industry
2. **Customize Colors**: Edit gradient colors in admin for each industry
3. **Test Review Flow**: Submit and moderate some test reviews
4. **Customize Content**: Update industry descriptions as needed

---

## Development Workflow

**Typical workflow when both are running:**

1. Backend (Terminal 1): `cd backend && source venv/bin/activate && python manage.py runserver`
2. Frontend (Terminal 2): `cd ~/Intersson && npm run dev`
3. Make changes in admin panel
4. Frontend automatically updates (may need to refresh browser)

**To stop:**
- Press `Ctrl+C` in each terminal window

---

## Getting Help

If you encounter issues:

1. Check that both servers are running
2. Check console/terminal for error messages
3. Verify database has data: `python manage.py dbshell` then `SELECT * FROM api_industry;`
4. Check browser console (F12) for frontend errors

---

## Summary

✅ **Backend**: Django + DRF + SQLite + Admin Panel  
✅ **Frontend**: Next.js + React + TypeScript  
✅ **Features**: Industries, Templates, Reviews with moderation  
✅ **Integration**: REST API connecting both  

**Admin Panel**: http://localhost:8000/admin  
**Website**: http://localhost:3000  
**API**: http://localhost:8000/api/
