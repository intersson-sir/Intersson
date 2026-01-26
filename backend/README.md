# Intersson Django Backend

Django REST API backend for the Intersson website with admin panel for content management.

## Features

- **Industries Management**: Add and manage industry categories
- **Templates Management**: Upload PDF templates for each industry with preview images
- **Reviews Moderation**: Receive, approve, or reject client reviews
- **REST API**: Full API for frontend integration
- **SQLite Database**: Simple, file-based database

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Load Initial Industries

This command loads the 10 existing industries into the database:

```bash
python manage.py load_industries
```

### 4. Create Admin User

```bash
python manage.py createsuperuser
```

Follow the prompts to create your admin account.

### 5. Run the Development Server

```bash
python manage.py runserver
```

The server will start at: **http://localhost:8000**

### 6. Access Admin Panel

Visit: **http://localhost:8000/admin**

Login with your superuser credentials.

## Admin Panel Features

### Industries
- View all 10 industries
- See template count for each industry
- Edit industry details (name, description, icon, gradient)
- Set display order

### Templates
1. **Select Industry**: Choose which industry the template belongs to
2. **Add Details**: Enter template name and optional description
3. **Upload Files**: 
   - Upload PDF file (required)
   - Upload preview image (optional)
4. **Set Active Status**: Control whether the template appears on the website
5. **Set Order**: Control display order within the industry

### Reviews
- View all submitted reviews (pending, approved, rejected)
- **Approve Reviews**: Select reviews and use bulk action "Approve selected reviews"
- **Reject Reviews**: Select reviews and use bulk action "Reject selected reviews"
- Preview how reviews will look on the website
- Customize colors for each review
- Set display order for approved reviews

## API Endpoints

All endpoints are accessible at `http://localhost:8000/api/`

### Industries
- `GET /api/industries/` - List all industries with template counts
- `GET /api/industries/{slug}/` - Get single industry with templates

### Templates
- `GET /api/templates/` - List all active templates
- `GET /api/templates/?industry={slug}` - Filter templates by industry

### Reviews
- `GET /api/reviews/` - List all approved reviews
- `POST /api/reviews/` - Submit new review (goes to pending status)

## Database Schema

### Industry Model
- `name` - Industry name
- `slug` - URL-friendly identifier
- `description` - Industry description
- `icon` - Path to icon image
- `gradient` - CSS gradient for cards
- `order` - Display order

### Template Model
- `industry` - Foreign key to Industry
- `name` - Template name
- `pdf_file` - Uploaded PDF file
- `preview_image` - Optional preview image
- `description` - Optional description
- `is_active` - Whether template is visible
- `order` - Display order

### Review Model
- `name` - Client name
- `company` - Company name
- `role` - Client's role/position
- `service` - Service provided
- `review_text` - The review content
- `status` - pending/approved/rejected
- `color_start` - Gradient start color
- `color_end` - Gradient end color
- `display_order` - Display order for approved reviews

## File Uploads

Uploaded files are stored in:
- PDFs: `backend/media/templates/pdfs/`
- Preview Images: `backend/media/templates/previews/`

Make sure the `media` directory has write permissions.

## CORS Configuration

CORS is configured to allow requests from:
- http://localhost:3000
- http://localhost:3001
- http://localhost:3002

Modify `intersson_backend/settings.py` to add more origins if needed.

## Production Notes

Before deploying to production:

1. Change `SECRET_KEY` in `settings.py`
2. Set `DEBUG = False`
3. Update `ALLOWED_HOSTS`
4. Configure proper database (PostgreSQL recommended)
5. Set up static files serving
6. Configure CORS for production domain
7. Use environment variables for sensitive settings

## Troubleshooting

### Port Already in Use
If port 8000 is in use, run on a different port:
```bash
python manage.py runserver 8001
```

### Permission Errors for Media Files
Make sure the media directory is writable:
```bash
chmod -R 755 media/
```

### Database Issues
Reset the database:
```bash
rm db.sqlite3
python manage.py migrate
python manage.py load_industries
python manage.py createsuperuser
```
