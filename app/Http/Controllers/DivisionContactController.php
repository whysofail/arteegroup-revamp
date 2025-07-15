<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDivisionContactRequest;
use App\Models\DivisionContact;
use Illuminate\Http\Request;

class DivisionContactController extends Controller
{
    public function store(StoreDivisionContactRequest $request)
    {
        $divisioncontact = DivisionContact::create($request->validated());

        return redirect()->back()->with('message', 'Thank you for reaching out!');
    }
}
