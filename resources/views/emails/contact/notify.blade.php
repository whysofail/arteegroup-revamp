@component('mail::message')
# Kontak Baru dari Website

Seseorang baru saja mengirim pesan melalui formulir **Get in Touch**.

---

**Nama:** {{ $contact->name }}

**Email:** {{ $contact->email }}

**Pesan:**  
{{ $contact->message }}

---

@component('mail::button', ['url' => 'mailto:' . $contact->email])
Balas Email
@endcomponent

Terima kasih,<br>
**Artee IT**
@endcomponent