@component('mail::message')
# Hello {{ $contact->name }},

Thanks for reaching out to us! We’ve received your message:

> "{{ $contact->message }}"

We'll get back to you soon.

Thanks,<br>
**Artee Team**
@endcomponent