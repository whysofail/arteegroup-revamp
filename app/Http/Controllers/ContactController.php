<?php

namespace App\Http\Controllers;
use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactAutoReply;
use App\Mail\NotifyAdminOfContact;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request)
    {
        $contact = Contact::create($request->validated());

        // Kirim auto-reply
        Mail::to($contact->email)->send(new ContactAutoReply($contact));

        // Kirim email ke email perusahaan dari email perusahaan
        Mail::to(config('mail.from.address'))->send(new NotifyAdminOfContact($contact));

        return redirect()->back()->with('message', 'Thank you for reaching out!');
    }
}
