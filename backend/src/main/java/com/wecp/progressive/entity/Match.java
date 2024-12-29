package com.wecp.progressive.entity;

import java.sql.Date;

public class Match {

    private int match_id;
    private int first_team_id;
    private int second_team_id;
    private Date match_date;
    private String venue;
    private String result;
    private String status;
    private int winner_team_id;

    
    public Match() {
    }

    public Match(int match_id, int first_team_id, int second_team_id, Date match_date, String venue, String result,
            String status, int winner_team_id) {
        this.match_id = match_id;
        this.first_team_id = first_team_id;
        this.second_team_id = second_team_id;
        this.match_date = match_date;
        this.venue = venue;
        this.result = result;
        this.status = status;
        this.winner_team_id = winner_team_id;
    }
    
    public int getMatch_id() {
        return match_id;
    }
    public void setMatch_id(int match_id) {
        this.match_id = match_id;
    }
    public int getFirst_team_id() {
        return first_team_id;
    }
    public void setFirst_team_id(int first_team_id) {
        this.first_team_id = first_team_id;
    }
    public int getSecond_team_id() {
        return second_team_id;
    }
    public void setSecond_team_id(int second_team_id) {
        this.second_team_id = second_team_id;
    }
    public Date getMatch_date() {
        return match_date;
    }
    public void setMatch_date(Date match_date) {
        this.match_date = match_date;
    }
    public String getVenue() {
        return venue;
    }
    public void setVenue(String venue) {
        this.venue = venue;
    }
    public String getResult() {
        return result;
    }
    public void setResult(String result) {
        this.result = result;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public int getWinner_team_id() {
        return winner_team_id;
    }
    public void setWinner_team_id(int winner_team_id) {
        this.winner_team_id = winner_team_id;
    }

    
}