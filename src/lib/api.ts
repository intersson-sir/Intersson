// API client for Intersson backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface Template {
    id: number;
    name: string;
    pdf_url: string;
    preview_image_url: string | null;
    description: string;
    order: number;
}

export interface Industry {
    id: number;
    slug: string;
    name: string;
    description: string;
    icon: string;
    gradient: string;
    templates?: Template[];
    template_count: number;
    order: number;
}

export interface Review {
    id?: number;
    name: string;
    company: string;
    role: string;
    service: string;
    review_text: string;
    logo?: string | File | null;
    color_start?: string;
    color_end?: string;
    submitted_at?: string;
}

/**
 * Fetch all industries
 */
export async function getIndustries(): Promise<Industry[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/industries/`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch industries');
        }

        const data = await response.json();
        // Handle paginated response
        if (data.results && Array.isArray(data.results)) {
            return data.results;
        }
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Error fetching industries:', error);
        return [];
    }
}

/**
 * Fetch single industry by slug with templates
 */
export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/industries/${slug}/`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching industry:', error);
        return null;
    }
}

/**
 * Fetch all approved reviews
 */
export async function getReviews(): Promise<Review[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/reviews/`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();
        // Handle paginated response
        if (data.results && Array.isArray(data.results)) {
            return data.results;
        }
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return [];
    }
}

/**
 * Submit a new review
 */
export async function submitReview(review: Review): Promise<{ success: boolean; message: string }> {
    try {
        const formData = new FormData();
        formData.append('name', review.name);
        formData.append('company', review.company);
        formData.append('role', review.role);
        formData.append('service', review.service);
        formData.append('review_text', review.review_text);

        if (review.logo) {
            formData.append('logo', review.logo);
        }

        formData.append('color_start', review.color_start || '#441AAD');
        formData.append('color_end', review.color_end || '#2A0E6E');

        const response = await fetch(`${API_BASE_URL}/reviews/`, {
            method: 'POST',
            // No Content-Type header needed, browser sets it for FormData
            body: formData,
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to submit review');
        }

        const data = await response.json();
        return {
            success: true,
            message: data.message || 'Review submitted successfully'
        };
    } catch (error) {
        console.error('Error submitting review:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Failed to submit review'
        };
    }
}
